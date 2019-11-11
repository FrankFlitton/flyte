package array

import (
	"context"

	"github.com/lyft/flyteplugins/go/tasks/pluginmachinery/core"
	"github.com/lyft/flytestdlib/errors"
	"github.com/lyft/flytestdlib/logger"
	"github.com/lyft/flytestdlib/storage"
)

const (
	ErrSystem errors.ErrorCode = "SYSTEM_ERROR"
)

func CheckTaskOutput(ctx context.Context, dataStore *storage.DataStore, outputPrefix storage.DataReference, childIdx, originalIdx int) (core.Phase, error) {
	or, err := ConstructOutputReader(ctx, dataStore, outputPrefix, originalIdx)
	if err != nil {
		return core.PhaseUndefined, errors.Wrapf(ErrSystem, err, "Failed to build output reader for sub task [%v] with original index [%v].", childIdx, originalIdx)
	}

	outputExists, err := or.Exists(ctx)
	if err != nil {
		return core.PhaseUndefined, errors.Wrapf(ErrSystem, err, "Failed to check if output file exists for sub task [%v] with original index [%v].", childIdx, originalIdx)
	}

	if !outputExists {
		errExists, err := or.IsError(ctx)
		if err != nil {
			return core.PhaseUndefined, errors.Wrapf(ErrSystem, err, "Failed to check if error file exists for sub task [%v] with original index [%v].", childIdx, originalIdx)
		}

		if errExists {
			logger.Debugf(ctx, "Found error file for sub task [%v] with original index [%v]. Marking as failure.",
				childIdx, originalIdx)
			return core.PhaseRetryableFailure, nil
		}
	}

	return core.PhaseSuccess, nil
}

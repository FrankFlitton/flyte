// Code generated by mockery v1.0.1. DO NOT EDIT.

package mocks

import (
	context "context"

	core "github.com/lyft/flyteplugins/go/tasks/pluginmachinery/core"
	mock "github.com/stretchr/testify/mock"
)

// ResourceRegistrar is an autogenerated mock type for the ResourceRegistrar type
type ResourceRegistrar struct {
	mock.Mock
}

type ResourceRegistrar_RegisterResourceQuota struct {
	*mock.Call
}

func (_m ResourceRegistrar_RegisterResourceQuota) Return(_a0 error) *ResourceRegistrar_RegisterResourceQuota {
	return &ResourceRegistrar_RegisterResourceQuota{Call: _m.Call.Return(_a0)}
}

func (_m *ResourceRegistrar) OnRegisterResourceQuota(ctx context.Context, namespace core.ResourceNamespace, quota int) *ResourceRegistrar_RegisterResourceQuota {
	c := _m.On("RegisterResourceQuota", ctx, namespace, quota)
	return &ResourceRegistrar_RegisterResourceQuota{Call: c}
}

func (_m *ResourceRegistrar) OnRegisterResourceQuotaMatch(matchers ...interface{}) *ResourceRegistrar_RegisterResourceQuota {
	c := _m.On("RegisterResourceQuota", matchers...)
	return &ResourceRegistrar_RegisterResourceQuota{Call: c}
}

// RegisterResourceQuota provides a mock function with given fields: ctx, namespace, quota
func (_m *ResourceRegistrar) RegisterResourceQuota(ctx context.Context, namespace core.ResourceNamespace, quota int) error {
	ret := _m.Called(ctx, namespace, quota)

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, core.ResourceNamespace, int) error); ok {
		r0 = rf(ctx, namespace, quota)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

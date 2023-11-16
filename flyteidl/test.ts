import {
  AdminExecutionCreateRequest,
  AdminExecutionMetadata,
  AdminExecutionSpec,
  AdminServiceApi,
} from "./gen/pb-node/flyteidl/service/flyteadmin/api";
import { flyteidl } from "./gen/pb-js/flyteidl";

const basePath = "http://localhost:30080";
const flyteAdmin = new AdminServiceApi(basePath);

// const id = new CoreIdentifier();
// id.domain = "development";
// id.project = "flytesnacks";
// id.name = "my-task";
// id.resourceType = flyteidl.core.ResourceType.TASK;

const authToken = "";
const filters = "";

// .listProjects(0, authToken, filters, "name", "DESCENDING", {})
const main = async () => {
  const projects = (await flyteAdmin.listProjects()).body.projects;
  const project = projects[0];
  const workflows = (await flyteAdmin.listWorkflows(
    project.id,
    project.domains[0].id,
    ""
  )).body.workflows;

  console.log(workflows);
};


// const executionRequest = new AdminExecutionCreateRequest();
// executionRequest.project = "flytesnacks";
// executionRequest.domain = "development";
// executionRequest.name = "my-task";

// const executionSpec = new AdminExecutionSpec();
// executionSpec.metadata = new AdminExecutionMetadata();

// idProject: string, idDomain: string, idName?: string, limit?: number, token?: string, filters?: string, sortByKey?: string, sortByDirection?: 'DESCENDING' | 'ASCENDING', options: any = {}) : Promise<{ response: http.ClientResponse; body: AdminExecutionList;  }>
// flyteAdmin.listExecutions(
//   id.project,
//   id.domain,
//   id.name,
//   0,
//   authToken,
//   filters,
//   "name",
//   "DESCENDING",
//   {}
// );

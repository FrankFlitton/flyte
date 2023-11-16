import { createCallbackClient, createPromiseClient } from "@connectrpc/connect";
import { AdminService } from "./gen/es/flyteidl/service/admin_connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { Sort } from "./gen/es/flyteidl/admin/common_pb";

const baseUrl = "http://localhost:30080/";

const transport = createConnectTransport({
  baseUrl,
  httpVersion: "1.1",
});

/**
 * HeadersList {
  cookies: null,
  [Symbol(headers map)]: Map(7) {
    'content-type' => { name: 'content-type', value: 'application/grpc' },
    'grpc-status' => { name: 'grpc-status', value: '3' },
    'grpc-message' => {
      name: 'grpc-message',
      value: 'invalid gRPC request content-type "application/proto"'
    },
    'x-envoy-upstream-service-time' => { name: 'x-envoy-upstream-service-time', value: '0' },
    'date' => { name: 'date', value: 'Thu, 16 Nov 2023 07:32:25 GMT' },
    'server' => { name: 'server', value: 'envoy' },
    'content-length' => { name: 'content-length', value: '0' }
  },
  [Symbol(headers map sorted)]: null
}

    !!! Type missmatch between envoy and connectrpc
    application/grpc (envoy) vs application/proto (connectrpc)
 */
async function main() {
  const client = createPromiseClient(AdminService, transport);
  client
    .listProjects(
      { sortBy: new Sort() },
      {
        headers: {
          "Content-Type": "application/json",
          //   "accept-encoding": "gzip, deflate, br",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    });
}
void main();

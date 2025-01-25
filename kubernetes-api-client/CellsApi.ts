import { CustomObjectsApi, KubeConfig } from "@kubernetes/client-node";

export class CellsApi {
    private readonly apiClient: CustomObjectsApi;
    constructor(config: KubeConfig) {
        this.apiClient = config.makeApiClient(CustomObjectsApi)
    }

    public async getCells() {
        return await this.apiClient.listClusterCustomObject({ group: "infra.karolsz.com", plural: "xcells", version: "v1alpha1" })
    }
}
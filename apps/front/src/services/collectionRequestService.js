import AbstractService from "./abstractService";

class CollectionRequestService extends AbstractService {
  constructor() {
    super("/collection-request");
  }
}

export default CollectionRequestService;

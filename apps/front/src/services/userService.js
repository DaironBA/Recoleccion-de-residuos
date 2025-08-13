import AbstractService from "./abstractService";

class UserService extends AbstractService {
  constructor() {
    super("/users");
  }
}

export default UserService;

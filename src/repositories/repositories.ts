import getInstance from "./instance";

const BASE_URL = "https://api.github.com/users/amorimcode";

const repositoriesApi = {
  getRepos: async (): Promise<any> => {
    const instance = getInstance();
    const { data } = await instance.get<any>(`${BASE_URL}/repos`);

    return data;
  },
};

export default repositoriesApi;

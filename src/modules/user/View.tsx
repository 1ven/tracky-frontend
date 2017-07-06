import * as React from "react";

export default ({ name, repos, isLoading }: Props) =>
  <div>
    <h1>
      User page - {name}
    </h1>
    <h3>Repos:</h3>
    {isLoading
      ? <div>Loading...</div>
      : repos.map((repo: string, key: number) =>
          <div key={key}>
            {repo}
          </div>
        )}
  </div>;

export type Props = {
  name: string;
  isLoading: boolean;
  repos?: string[];
};

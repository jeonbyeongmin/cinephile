type QueryParams = Record<string, string | number>;

export function generatePath(resourceName: string, queries?: QueryParams) {
  let path = resourceName;

  if (queries) {
    const queryParams = new URLSearchParams();

    for (const key in queries) {
      if (queries[key] === undefined) continue;
      queryParams.append(key, queries[key].toString());
    }

    path += `?${queryParams.toString()}`;
  }

  return path;
}

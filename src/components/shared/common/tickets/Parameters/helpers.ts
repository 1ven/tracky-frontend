import * as qs from "qs";

export const mapToQuery = formData =>
  qs.stringify({
    filter: {
      status: formData.status
    }
  });

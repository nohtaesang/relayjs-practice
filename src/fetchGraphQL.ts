async function fetchGraphQL(text: string, variables?: any) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    "http://k8s-default-bourboni-47e4fb890f-1357147085.ap-northeast-2.elb.amazonaws.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;

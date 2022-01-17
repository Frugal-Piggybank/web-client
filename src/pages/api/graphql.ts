import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default withApiAuthRequired(async function graphql(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      refresh: true,
    });

    const uri = `${process.env.GRAPHQL_BASE_URL}`;

    return await httpProxyMiddleware(req, res, {
      target: `${uri}`,
      pathRewrite: [
        {
          patternStr: "^/api/graphql",
          replaceStr: "/graphql",
        },
      ],
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
});

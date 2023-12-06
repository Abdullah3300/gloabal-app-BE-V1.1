const { getCustomers } = require("../../controllers/index");

exports.handler = async function (event, context) {
  try {
    const CCode = event.path.split("/")[2]; // Extract CCode from the URL path
    const results = await getCustomers({ params: { CCode } }, {});

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

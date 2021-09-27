import * as fs from "fs";

export interface Options {
  path: string;
}

// TODO: add deep object parsing

// Parses a json env file and assigns the resulting variables to NODE envars
export default function dotenv({ path = ".env.json" }: Options) {
  try {
    // Deserialize envars from config file
    const buffer = fs.readFileSync(path, { encoding: "utf8" });
    const variables = JSON.parse(buffer);
    // Populate envars from resulting json data
    Object.assign(process.env, variables);
  } catch (err) {
    throw new Error(`Error parsing json: ${err}`);
  }
}

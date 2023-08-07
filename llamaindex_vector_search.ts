import fs from "fs/promises";
import { Document, VectorStoreIndex } from "llamaindex";

async function main() {
  const essay = await fs.readFile(
    "node_modules/llamaindex/examples/abramov.txt",
    "utf-8"
  );
  const document = new Document({ text: essay });
  const index = await VectorStoreIndex.fromDocuments([document]);
  const queryEngine = index.asQueryEngine();
  const response = await queryEngine.query(
    "What did the author do in college?"
  );
  console.log(response.toString());
}

main()

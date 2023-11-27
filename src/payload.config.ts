import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import {
  AlignFeature,
  BlockQuoteFeature,
  BoldTextFeature,
  CheckListFeature,
  HeadingFeature,
  IndentFeature,
  ItalicTextFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  StrikethroughTextFeature,
  UnderlineTextFeature,
  UnoderedListFeature,
  UploadFeature,
} from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Introduction from "./globals/Introduction";
import Media from "./collections/Media";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({
    features: [
      AlignFeature(),
      CheckListFeature(),
      OrderedListFeature(),
      UnoderedListFeature(),
      IndentFeature(),
      ParagraphFeature(),
      HeadingFeature({}),
      LinkFeature({}),
      BlockQuoteFeature(),
      BoldTextFeature(),
      ItalicTextFeature(),
      UnderlineTextFeature(),
      StrikethroughTextFeature(),
      RelationshipFeature(),
      UploadFeature(),
    ],
  }),
  collections: [Users, Media],
  globals: [Introduction],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});

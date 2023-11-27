import { GlobalConfig } from "payload/types";
import buildBlockDataResponse from "../groups/group-block.builder";
import groupRowContentBuilder from "../groups/group-row-content.builder";

const Introduction: GlobalConfig = {
  slug: "introduction",
  label: {
    en: "Introduction Page",
    vi: "Trang Giới Thiệu",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "header",
          label: {
            vi: "Đầu Trang",
            en: "Header Section",
          },
          fields: buildBlockDataResponse([
            {
              name: "premise",
              label: {
                en: "Premise",
                vi: "Lời mở đầu",
              },
              type: "group",
              fields: groupRowContentBuilder(),
            },
          ]),
        },
        {
          name: "experience",
          label: {
            en: "Experience Section",
            vi: "Kinh Nghiệm",
          },
          fields: buildBlockDataResponse([
            {
              name: "introduction",
              label: {
                en: "Introduction section",
                vi: "Mục giới thiệu",
              },
              type: "array",
              localized: true,
              fields: groupRowContentBuilder(),
            },
          ]),
        },
        {
          name: "our_team",
          label: {
            en: "Our Team Section",
            vi: "Đội ngũ nhân viên",
          },
          fields: buildBlockDataResponse([
            {
              name: "gallery",
              localized: true,
              label: {
                en: "Gallery",
                vi: "Thư viện ảnh",
              },
              type: "array",
              fields: [
                {
                  label: {
                    vi: "Ảnh",
                    en: "Image",
                  },
                  name: "image",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
          ]),
        },
        {
          name: "questionnaires",
          label: {
            en: "Question - Interaction Section",
            vi: "Câu hỏi - Tương Tác",
          },
          fields: buildBlockDataResponse([
            {
              name: "content",
              label: {
                en: "Content",
                vi: "Nội dung",
              },
              type: "array",
              fields: groupRowContentBuilder(),
            },
          ]),
        },
      ],
    },
  ],
};

export default Introduction;

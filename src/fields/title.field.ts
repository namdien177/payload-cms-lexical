import { Field } from 'payload/types';

/**
 * @type {Field}
 */
const TitleField = () => {
  return {
    name: 'title',
    label: {
      en: 'title',
      vi: 'Tiêu đề',
    },
    type: 'text',
    localized: true,
  } as const;
};

export default TitleField;

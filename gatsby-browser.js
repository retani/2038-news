/*import { AuthorsField } from "./src/fields/authors"

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: "authors",
    Component: AuthorsField,
  })
}
*/

  
import TinaCMSFileField from 'tinacms-file-field'
import TinaCMSConditionField from 'tinacms-condition-field'

export const onClientEntry = () => {
  const conditionField = new TinaCMSConditionField(window.tinacms);
  conditionField.install();

  const fileField = new TinaCMSFileField(window.tinacms);
  fileField.install();
}
import { TypeGenerator } from "json2jsii";


const outDir = './generated'

import crd from './crds.json';
import { CodeMaker } from "codemaker";

const versions = crd.spec.versions

for (const version of versions) {
    const fileName = `${version.name}.${crd.metadata.name}.ts`

    const code = new CodeMaker();
    code.openFile(fileName);
    code.indentation = 2;

    console.log(fileName)
    const schema = createPropsSchema(version.schema.openAPIV3Schema)

    const types = new TypeGenerator();
    const typeName = TypeGenerator.normalizeTypeName(crd.spec.names.kind)
    types.emitType(typeName, schema);

    generateHeader(code, typeName, crd, version)
    code.line(types.render())
    code.closeFile(fileName)
    await code.save(outDir);
}

function generateHeader(code: CodeMaker, typeName: string, crd: { spec: { group: string, names: { kind: string } } }, version: { name: string }) {
    code.line(`const apiVersion = '${crd.spec.group}/${version.name}';`);
    code.line(`const kind = '${crd.spec.names.kind}';`);
    code.line()
    code.openBlock(`export const manifest = (props: ${typeName}) =>`)
    code.openBlock('return')
    code.line('apiVersion,')
    code.line('kind,')
    code.line(`...toJson_${typeName}(props)`)
    code.closeBlock()
    code.closeBlock()
    code.line()
}

function createPropsSchema(schema: any) {

    const copy = { ...schema || {} }
    delete copy.properties.apiVersion
    delete copy.properties.kind

    return copy

}

// TODO handle lists

// function collectCRDs(objs: any[]) {
//     for (const obj of objs.filter(o => o)) {
//       if (obj.kind === CRD_KIND) {
//         crds.push(obj);
//       }
//       if (obj.kind === 'List') {
//         collectCRDs(obj.items);
//       }
//     }
//   }

//   collectCRDs(objects);

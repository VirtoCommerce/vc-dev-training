import type { CodegenConfig } from '@graphql-codegen/cli';
import { environment } from './src/environments/environment';

const config: CodegenConfig = {
  schema: 'https://vcst-devtraining.govirto.com/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/app/graphql/types/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        addExplicitOverride: true,
        strictScalars: true,
        useTypeImports: true,
        skipTypename: false,
        declarationKind: 'interface',
        typesPrefix: 'I',
        enumPrefix: false,
        scalars: {
          BigInt: 'number',
          Byte: 'number',
          Date: 'string',
          DateTime: 'string',
          DateOnly: 'string',
          Decimal: 'number',
          DynamicPropertyValue: 'string | number | boolean | null',
          Guid: 'string',
          Half: 'number',
          Long: 'number',
          Milliseconds: 'number',
          ModuleSettingValue: 'string | number | boolean | null',
          OptionalDecimal: 'number | undefined',
          OptionalNullableDecimal: 'number | null | undefined',
          OptionalString: 'string | undefined',
          PropertyValue: 'string | number | boolean | null',
          SByte: 'number',
          Seconds: 'number',
          Short: 'number',
          TimeOnly: 'string',
          UInt: 'number',
          ULong: 'number',
          Uri: 'string',
          UShort: 'number',
        },
      },
    },
  },
};

export default config;


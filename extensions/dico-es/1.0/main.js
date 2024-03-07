import { PowerDocsExtension } from "PowerDocs.Lib";

var ext = PowerDocsExtension.create();
ext.registerLanguageDictionary("Spanish", "index.dic", "thes.dat");
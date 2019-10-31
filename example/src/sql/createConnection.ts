import { createConnection as _createConnection, IConnection } from 'vscode-languageserver';
import { MessageReader, MessageWriter } from "vscode-jsonrpc";

export default function createConnection(reader: MessageReader, writer :MessageWriter): IConnection {

      return _createConnection(reader, writer)

}

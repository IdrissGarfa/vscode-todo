import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vstodo" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('vstodo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vstodo.askQuestion', async () => {
			const answer = await vscode.window.showInformationMessage('How are you today?', "Good", "Bad");
			
			if ( answer === "Bad"){
				vscode.window.showInformationMessage("Sorry to hear that");
			}else {
				console.log({ answer });
			}
		})
	);

}

export function deactivate() {}

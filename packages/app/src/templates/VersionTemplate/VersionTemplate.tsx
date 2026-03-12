import { FC, useState } from 'react';

export const VersionTemplate: FC<{
	version: string;
}> = ({ version }) => {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(version);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="bg-base-200 flex min-h-screen items-center justify-center p-4 md:p-8">
			<div className="card bg-base-100 w-full max-w-md shadow-xl">
				<div className="card-body text-center">
					<div className="flex flex-col gap-y-4">
						<h1 className="text-4xl font-bold">App Version</h1>

						<p className="text-base-content/70">
							Build version of the current deployment
						</p>

						<div className="bg-base-200 rounded-lg p-4 font-mono text-lg break-all">
							{version}
						</div>

						<div className="card-actions justify-center gap-2">
							<button
								onClick={copy}
								className={`btn btn-sm ${
									copied ? 'btn-success' : 'btn-outline'
								}`}>
								{copied ? 'Copied ✓' : 'Copy'}
							</button>
						</div>

						<p className="text-base-content/50 text-sm">
							Format: <kbd className="kbd kbd-sm">YYYY.MM.DD.hh.mm.ss</kbd>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

VersionTemplate.displayName = 'VersionTemplate';

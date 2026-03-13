import Link from 'next/link';
import { FC, ReactNode, useEffect, useState } from 'react';

type Feature = {
	id: string;
	emoji: ReactNode;
	title: string;
	description: string;
};

type FeaturesSection = { title?: ReactNode; items: Feature[] };

export type LandingContent = {
	navbar: {
		title: ReactNode;
		buttonText: string;
		buttonHref: string;
	};
	hero: {
		title: ReactNode;
		tagline: ReactNode;
		buttonText: string;
		buttonHref: string;
	};
	features?: FeaturesSection;
	cta: {
		title: ReactNode;
		description: ReactNode;
		buttonText: string;
		buttonHref: string;
	};
	footer: {
		name: string;
		year?: number;
	};
};

// ---------- Floating Light ----------
const FloatingLight: FC = () => (
	<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
		<div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.35)_0%,rgba(250,204,21,0.15)_35%,transparent_70%)] blur-3xl"></div>
	</div>
);

// ---------- Navbar ----------
const Navbar: FC<LandingContent['navbar']> = ({
	title,
	buttonText,
	buttonHref,
}) => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="fixed top-0 z-50 w-full transition-all duration-300">
			<div className="container mx-auto px-4">
				<div
					className={`flex items-center justify-between px-6 py-3 transition-all duration-300 ${
						scrolled
							? 'border-base-300/40 bg-base-100/25 mt-3 rounded-full border shadow-xl backdrop-blur-lg'
							: 'bg-transparent'
					}`}>
					<div className="text-xl font-bold">{title}</div>
					<Link href={buttonHref} className="btn btn-primary btn-sm">
						{buttonText}
					</Link>
				</div>
			</div>
		</div>
	);
};

// ---------- Hero ----------
const HeroSection: FC<LandingContent['hero']> = ({
	title,
	tagline,
	buttonText,
	buttonHref,
}) => (
	<section className="flex h-screen w-screen items-center justify-center px-6 text-center">
		<div className="container mx-auto space-y-6">
			<h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
			<p className="text-lg opacity-70">{tagline}</p>
			<Link href={buttonHref} className="btn btn-primary btn-lg">
				{buttonText}
			</Link>
		</div>
	</section>
);

// ---------- Features ----------
const FeaturesSection: FC<FeaturesSection> = ({ title, items }) => (
	<section className="px-6 py-24">
		<div className="container mx-auto space-y-12">
			{title && <h2 className="text-center text-3xl font-bold">{title}</h2>}
			<div className="grid gap-12 md:grid-cols-3">
				{items.map((feature) => (
					<div key={`feature-${feature.id}`} className="space-y-4">
						<div className="flex items-center justify-center gap-3 text-lg font-semibold">
							<span className="text-3xl">{feature.emoji}</span>
							<span>{feature.title}</span>
						</div>
						<p className="opacity-70">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

// ---------- CTA ----------
const CTASection: FC<LandingContent['cta']> = ({
	title,
	description,
	buttonText,
	buttonHref,
}) => (
	<section className="px-6 py-24">
		<div className="container mx-auto space-y-6 text-center">
			<h2 className="text-4xl font-bold">{title}</h2>
			<p className="opacity-70">{description}</p>
			<Link href={buttonHref} className="btn btn-primary btn-lg">
				{buttonText}
			</Link>
		</div>
	</section>
);

// ---------- Footer ----------
const Footer: FC<LandingContent['footer']> = ({ name, year }) => (
	<footer className="px-6 py-8">
		<div className="container mx-auto text-center text-sm opacity-60">
			© {year ?? new Date().getFullYear()} {name}. All rights reserved.
		</div>
	</footer>
);

// ---------- Landing Template ----------
export const LandingTemplate: FC<{ content: LandingContent }> = ({
	content,
}) => (
	<div className="text-base-content relative overflow-x-hidden">
		<FloatingLight />
		<Navbar {...content.navbar} />
		<HeroSection {...content.hero} />
		{content.features?.items.length && (
			<FeaturesSection {...content.features} />
		)}
		<CTASection {...content.cta} />
		<Footer {...content.footer} />
	</div>
);

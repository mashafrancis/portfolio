'use client';

import { Header } from 'components/Form';
import { useRandomColorPair } from 'lib/hooks/useRandomColorPair';
import { ReactElement, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { RoughNotation } from 'react-rough-notation';

import { contact } from 'config/contact';

export default function Contact(): ReactElement {
	const [randomColor] = useRandomColorPair();
	const [isCalendarOpen, setCalendarOpen] = useState<boolean>(false);

	const handleCalendarState = () => setCalendarOpen((prevState) => !prevState);

	return (
		<>
			<section className='fade-in divide-y divide-gray-300 dark:divide-gray-800'>
				<Header title='Contact.' />
				<div className='container py-12'>
					<p>
						Do you have a project in mind? Want to hire me? or simply wanna
						chat? Feel free to
						<span
							className='ml-2 cursor-pointer !font-bold !text-black !no-underline dark:!text-white'
							onClick={handleCalendarState}
							role='button'
							tabIndex={0}
						>
							<RoughNotation
								show
								type='highlight'
								strokeWidth={4}
								animationDelay={250}
								animationDuration={2000}
								color={randomColor}
							>
								{`schedule a meeting `}
							</RoughNotation>
						</span>
						with me and we can grab a cup of coffee as we chat about it.
					</p>
				</div>
			</section>
			<PopupModal
				url={contact.calendly}
				onModalClose={handleCalendarState}
				open={isCalendarOpen}
				rootElement={
					typeof window !== 'undefined' && document.getElementById('__next')
				}
			/>
		</>
	);
}

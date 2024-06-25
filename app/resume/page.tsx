'use client';

import '@ungap/with-resolvers';

import { useEffect, useRef, useState } from 'react';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';

import IconDownload from '@/assets/svg/download-document.svg';
import Stack from '@/lib/layout/Stack';
import clsx from 'clsx';
import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './styles.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function getElementOuterWidth(element: HTMLElement): number {
	// Ensure the element is an HTMLElement
	if (!(element instanceof HTMLElement)) {
		console.error('Provided element is not an HTMLElement:', element);
		return 0;
	}

	// Get the bounding client rectangle width
	const rect = element.getBoundingClientRect();
	const width = rect.width;

	// Get computed styles
	const style = window?.getComputedStyle(element);

	// Parse and add margin values
	const marginLeft = parseFloat(style.marginLeft);
	const marginRight = parseFloat(style.marginRight);

	const totalWidth = width + marginLeft + marginRight;

	return totalWidth;
}

const Contact = () => {
	type Size = {
		width?: number;
		height?: number;
	};

	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	const ref = useRef<HTMLElement>(null);
	const [{ width, height }, setSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});

	const onResize = useDebounceCallback(setSize, 200);

	useResizeObserver({
		ref,
		onResize,
	});

	useEffect(() => {
		if (ref.current) {
			const outerWidth = getElementOuterWidth(ref.current);
			setSize({ width: outerWidth });
		}
	}, []);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<section ref={ref} style={{ margin: 'var(--k-space-xs-xl)' }}>
			<Stack className={styles.stack}>
				<div className={styles.heading__wrap}>
					<h1>Résumé</h1>
					<Link
						href="/kendrick-arnett-resume.pdf"
						target="_blank"
						rel="noopener"
						className={clsx('as-button', styles.download)}
					>
						Download <IconDownload className={styles.icon} />
						<span className="visually-hidden">
							my résumé (Opens in new window)
						</span>
					</Link>
				</div>
				<Document
					file="/kendrick-arnett-resume.pdf"
					onLoadSuccess={onDocumentLoadSuccess}
					className={styles.pdf}
				>
					<Page
						pageNumber={1}
						canvasBackground="transparent"
						className={styles['pdf__page']}
						width={width}
					/>
					<Page
						pageNumber={2}
						canvasBackground="transparent"
						className={styles['pdf__page']}
						width={width}
					/>
					<Page
						pageNumber={3}
						canvasBackground="transparent"
						className={styles['pdf__page']}
						width={width}
					/>
				</Document>
			</Stack>
		</section>
	);
};

export default Contact;

'use client';

import { useEffect, useRef, useState } from 'react';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';

import styles from './styles.module.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();

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
	const style = window.getComputedStyle(element);

	// Parse and add margin values
	const marginLeft = parseFloat(style.marginLeft);
	const marginRight = parseFloat(style.marginRight);

	const totalWidth = width + marginLeft + marginRight;

	return totalWidth;
}

const Contact = () => {
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);

	const ref = useRef<HTMLElement>(null);
	const [width, setWidth] = useState<number>(0);

	const onResize = useDebounceCallback((entry: ResizeObserverEntry) => {
		if (entry && ref.current) {
			const outerWidth = getElementOuterWidth(ref.current);
			setWidth(outerWidth);
		}
	}, 200);

	useResizeObserver({
		ref,
		onResize,
	});

	useEffect(() => {
		if (ref.current) {
			const outerWidth = getElementOuterWidth(ref.current);
			setWidth(outerWidth);
		}
	}, []);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<section ref={ref} style={{ margin: 'var(--k-space-xs-xl)' }}>
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
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</section>
	);
};

export default Contact;

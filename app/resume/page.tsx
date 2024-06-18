'use client';

import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import styles from './styles.module.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();

const Contact = () => {
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [resumeWidth, setResumeWidth] = useState<number>();
	const { width = 0 } = useWindowSize({ debounceDelay: 200 });

	function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
		setNumPages(numPages);
	}

	return (
		<section style={{ margin: 'auto' }}>
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

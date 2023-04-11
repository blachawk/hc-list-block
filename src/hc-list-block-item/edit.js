import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
// import { __ } from '@wordpress/i18n';

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'my-list-item',
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps);

	return (
		<>
			<li {...innerBlocksProps} />
		</>
	);
}

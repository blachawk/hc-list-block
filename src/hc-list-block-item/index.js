import { registerBlockType } from '@wordpress/blocks';
// import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'blachawk/hc-list-block-item', {
	title: 'HC List Block Item',
	description: 'A list block option for the parent HC List Block',
	category: 'text',
	icon: 'minus',
	parent: [ 'blachawk/hc-list-block', 'blachawk/hc-list-block-unordered' ],
	supports: {
		reusable: false,
		html: true,
	},
	edit: Edit,
	save: Save,
} );

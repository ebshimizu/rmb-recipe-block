/**
 * External Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';
const { name } = metadata;

registerBlockType( name, {
	edit( { attributes, setAttributes } ) {
		const {
			difficulty,
			serving,
			showDifficulty,
			showServing,
			showTime,
			showCleanup,
			cleanup,
			time,
		} = attributes;
		const showingAny =
			showDifficulty || showServing || showTime || showCleanup;
		// eslint-disable-next-line react-hooks/rules-of-hooks -- This is a component.
		const blockProps = useBlockProps( {
			className: showingAny
				? 'rmb-recipe__meta-list'
				: 'rmb-recipe__meta-list rmb-recipe__meta-list-empty',
		} );

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Fields', 'recipe-block' ) }>
						<ToggleControl
							label="Show serving size"
							checked={ showServing }
							onChange={ () =>
								setAttributes( { showServing: ! showServing } )
							}
						/>
						<ToggleControl
							label="Show time"
							checked={ showTime }
							onChange={ () =>
								setAttributes( { showTime: ! showTime } )
							}
						/>
						<ToggleControl
							label="Show difficulty"
							checked={ showDifficulty }
							onChange={ () =>
								setAttributes( {
									showDifficulty: ! showDifficulty,
								} )
							}
						/>
						<ToggleControl
							label="Show cleanup"
							checked={ showCleanup }
							onChange={ () =>
								setAttributes( {
									showCleanup: ! showCleanup,
								} )
							}
						/>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					{ showingAny ? (
						<>
							{ showServing && (
								<div className="rmb-recipe__meta-item rmb-recipe__meta-item-serving">
									<span className="rmb-recipe__meta-item-label">
										{ __(
											'Serving Size:',
											'recipe-block'
										) }
									</span>
									<RichText
										placeholder={ __(
											'Write serving…',
											'recipe-block'
										) }
										className="rmb-recipe__meta-item-value"
										onChange={ ( value ) =>
											setAttributes( { serving: value } )
										}
										value={ serving }
									/>
								</div>
							) }
							{ showTime && (
								<div className="rmb-recipe__meta-item rmb-recipe__meta-item-time">
									<span className="rmb-recipe__meta-item-label">
										{ __( 'Time:', 'recipe-block' ) }
									</span>
									<RichText
										placeholder={ __(
											'Write time…',
											'recipe-block'
										) }
										className="rmb-recipe__meta-item-value"
										onChange={ ( value ) =>
											setAttributes( { time: value } )
										}
										value={ time }
									/>
								</div>
							) }
							{ showDifficulty && (
								<div className="rmb-recipe__meta-item rmb-recipe__meta-item-difficulty">
									<span className="rmb-recipe__meta-item-label">
										{ __( 'Difficulty:', 'recipe-block' ) }
									</span>
									<RichText
										placeholder={ __(
											'Write difficulty…',
											'recipe-block'
										) }
										className="rmb-recipe__meta-item-value"
										onChange={ ( value ) =>
											setAttributes( {
												difficulty: value,
											} )
										}
										value={ difficulty }
									/>
								</div>
							) }
							{ showCleanup && (
								<div className="rmb-recipe__meta-item rmb-recipe__meta-item-cleanup">
									<span className="rmb-recipe__meta-item-label">
										{ __( 'Cleanup:', 'recipe-block' ) }
									</span>
									<RichText
										placeholder={ __(
											'Write cleanup…',
											'recipe-block'
										) }
										className="rmb-recipe__meta-item-value"
										onChange={ ( value ) =>
											setAttributes( {
												cleanup: value,
											} )
										}
										value={ cleanup }
									/>
								</div>
							) }
						</>
					) : (
						<em>
							{ __(
								'Nothing to show. Turn on a meta field, or remove this block.',
								'recipe-block'
							) }
						</em>
					) }
				</div>
			</>
		);
	},
	save( props ) {
		const {
			difficulty,
			serving,
			showDifficulty,
			showServing,
			showTime,
			time,
			showCleanup,
			cleanup,
		} = props.attributes; /* eslint-disable-line react/prop-types */
		if ( ! showDifficulty && ! showServing && ! showTime ) {
			return null;
		}

		return (
			<div
				{ ...useBlockProps.save( {
					className: 'rmb-recipe__meta-list',
				} ) }
			>
				{ showServing && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-serving">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Serving Size:', 'recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ serving }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
				{ showTime && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-time">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Time:', 'recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ time }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
				{ showDifficulty && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-difficulty">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Difficulty:', 'recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ difficulty }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
				{ showCleanup && (
					<div className="rmb-recipe__meta-item rmb-recipe__meta-item-cleanup">
						<span className="rmb-recipe__meta-item-label">
							{ __( 'Cleanup:', 'recipe-block' ) }
						</span>
						<RichText.Content
							tagName="div"
							value={ cleanup }
							className="rmb-recipe__meta-item-value"
						/>
					</div>
				) }
			</div>
		);
	},
} );

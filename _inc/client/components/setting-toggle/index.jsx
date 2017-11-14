/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import CompactFormToggle from 'components/form/form-toggle/compact';

export class SettingToggle extends React.Component {
	static propTypes = {
		toggleSetting: React.PropTypes.func,
		activated: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		className: React.PropTypes.string,
		id: React.PropTypes.string
	};

	static defaultProps = {
		activated: false
	};

	toggleSetting = () => {
		return this.props.toggleSetting( this.props.slug, this.props.activated );
	};

	render() {
		return <CompactFormToggle checked={ this.props.activated }
			className={ this.props.className }
			onChange={ this.toggleSetting }
			disabled={ this.props.disabled }
			id={ this.props.id }
		> { this.props.children }</CompactFormToggle>;
	}
}

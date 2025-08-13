import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
	theme: create({
		base: 'dark',
		brandTitle: 'Vault UI',
		brandUrl: 'https://github.com/jamesomichael/vault-ui',
		brandImage:
			'https://mexhjsdibsoshbepazwt.supabase.co/storage/v1/object/public/portfolio25/vault-ui.png',
		brandTarget: '_blank',

		appBg: '#0f172b',
		appContentBg: '#1d293d',
		appBorderColor: '#90a1b9',
		appBorderRadius: 4,

		barBg: '#0f172b',
	}),
});

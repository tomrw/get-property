const DEFAULT_OPTIONS = {
	defaultValue: undefined,
	delimiter: '.'
};

module.exports = (obj = {}, propertyPath = '', options = DEFAULT_OPTIONS) => {
	const { defaultValue, delimiter } = options;
	const properties = propertyPath.split(delimiter);

	return properties.reduce((obj, prop) => {
		let value = defaultValue;

		if (obj && obj[prop]) {
			value = obj[prop];
		}

		return value;
	}, obj);
};

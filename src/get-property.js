const DEFAULT_OPTIONS = {
	delimiter: '.'
};

module.exports = (obj = {}, propertyPath = '', options = DEFAULT_OPTIONS) => {
	const { delimiter } = options;
	const properties = propertyPath.split(delimiter);

	return properties.reduce((obj, prop) => {
		if (obj && obj[prop]) {
			return obj[prop];
		}
	}, obj);
};

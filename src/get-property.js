module.exports = (obj, propertyPath) => {
	const properties = propertyPath.split('.');

	return properties.reduce((obj, prop) => {
		if (obj[prop]) {
			return obj[prop];
		}
	}, obj);
};

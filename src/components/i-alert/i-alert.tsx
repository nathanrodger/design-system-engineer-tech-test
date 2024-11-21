import React from 'react';
import Alert from '@mui/material/Alert';

import {
	FaCircleInfo,
	FaTriangleExclamation,
	FaCircleExclamation
} from 'react-icons/fa6';


interface IAlertProps {
	severity: 'error' | 'success' | 'info' | 'warning' | undefined;
	children: React.ReactNode,
}

const IAlert = ({severity, children}: IAlertProps) => {
	const alertIcon =
		severity === "error" ? <FaCircleExclamation /> :
		severity === "warning" ? <FaTriangleExclamation /> :
		<FaCircleInfo />

	return (
		<Alert severity={severity} icon={alertIcon}>
			{children}
		</Alert>
	)
}

export default IAlert;
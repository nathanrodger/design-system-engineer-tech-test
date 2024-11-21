import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import style from './i-alert.module.scss';

import {
	FaCircleInfo,
	FaTriangleExclamation,
	FaCircleExclamation
} from 'react-icons/fa6';

interface IAlertProps {
	title: string,
	severity: 'error' | 'success' | 'info' | 'warning' | undefined;
	children: React.ReactNode,
}

const IAlert = ({title, severity, children}: IAlertProps) => {
	// const alertIcon =
	// 	severity === 'error' ? <FaCircleExclamation /> :
	// 	severity === 'warning' ? <FaTriangleExclamation /> :
	// 	<FaCircleInfo />

	return (
		<Alert severity={severity} iconMapping={{
			success: <FaCircleInfo />,
			warning: <FaTriangleExclamation />,
			error: <FaCircleExclamation />
		}} className={ style['info'] }>
			<AlertTitle>{title}</AlertTitle>
			{children}
		</Alert>
	)
}

export default IAlert;
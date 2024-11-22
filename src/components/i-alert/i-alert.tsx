import React from 'react';
import clsx from 'clsx';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import {
	FaCircleInfo,
	FaTriangleExclamation,
	FaCircleExclamation
} from 'react-icons/fa6';

import style from './i-alert.module.scss';

interface IAlertProps {
	title: string,
	severity: 'error' | 'success' | 'info' | 'warning' | undefined;
	children: React.ReactNode,
}

const IAlert = ({title, severity, children}: IAlertProps) => {
	return (
		<Alert severity={severity} iconMapping={{
			success: <FaCircleInfo />,
			warning: <FaTriangleExclamation />,
			error: <FaCircleExclamation />
		}} className={style['alert']} variant="filled">
			<AlertTitle>{title}</AlertTitle>
			{children}
		</Alert>
	)
}

export default IAlert;
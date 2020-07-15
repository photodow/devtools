import React from "react";
import { settings } from 'carbon-components';
import { Link } from 'carbon-components-react';
import { name, version, bugs, repository, dependencies } from '../../../../package.json';

const { prefix } = settings;

const CARBON_VERSION = dependencies['@carbon/grid'].split('.')[0].replace('^', '');
const DOTCOM_VERSION = dependencies['@carbon/ibmdotcom-react'].split('.')[0].replace('^', '');

function Footer () {
    return (
        <footer className={`${prefix}--row`}>
            <ul className={`${prefix}--options__meta ${prefix}--col`}>
                <li>{name} v{version}</li>
                <li>ibm.com library v{DOTCOM_VERSION}</li>
                <li>carbon v{CARBON_VERSION}</li>
                <li><Link href={repository.url} target="_blank">code repository</Link></li>
                <li><Link href={bugs.url} target="_blank">submit an issue</Link></li>
            </ul>
        </footer>
    );
}

export { Footer };
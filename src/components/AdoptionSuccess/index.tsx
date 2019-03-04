import './styles.scss';
import React from 'react';

export const AdoptionSuccess = (props: { exploreTx: string; pupperName: string }) => (
  <div className="adoption-success">
    <p className="adoption-success-title">🚀 You adopted {props.pupperName}!</p>
    <p>
      Click{' '}
      <a href={props.exploreTx} target="_blank">
        here
      </a>{' '}
      to see the transaction details
    </p>
  </div>
);

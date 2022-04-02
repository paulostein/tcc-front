import React from 'react';

import { UtilsContainer, UtilsList } from './styles';

export default function Utils() {
  return (
    <UtilsContainer>
      <UtilsList>
        <ul>
          <li>
            <span>Link 1:</span>
            <a href="google.com" target="_blank">
              Link um
            </a>
          </li>
          <li>
            <span>Link 2:</span>
            <a href="google.com" target="_blank">
              Link dois
            </a>
          </li>
          <li>
            <span>Link 3:</span>
            <a href="google.com" target="_blank">
              Link três
            </a>
          </li>
          <li>
            <span>Link 4:</span>
            <a href="google.com" target="_blank">
              Link quatro
            </a>
          </li>
          <li>
            <span>Link 5:</span>
            <a href="google.com" target="_blank">
              Link cinco
            </a>
          </li>
        </ul>
      </UtilsList>
    </UtilsContainer>
  );
}

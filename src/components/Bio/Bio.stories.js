import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
  <Bio 
    headshot="https://pbs.twimg.com/profile_images/1369160136141377539/biO8qtON_400x400.jpg"
    name="Kelsi Proulx"
    tagline="Helping others to learn by doing!"
    role="Developer Intern @BCCH Digital Lab"
  />
);

export const Default = Template.bind({});
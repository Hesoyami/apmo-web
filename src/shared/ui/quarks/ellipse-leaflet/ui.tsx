import { createPathComponent } from '@react-leaflet/core';

import L from 'leaflet';

import '@/shared/lib/l.ellipse.min';

function createEllipse(props: any, context: any) {
  const { center, radii, tilt, options } = props;
  // Create the leaflet.ellipse instance:
  const instance = new (L.Ellipse as any)(center, radii, tilt, options);

  // Return the instance and context:
  return {
    instance,
    context: { ...context, overlayContainer: instance },
  };
}

// Update state:
function updateEllipse(instance: any, props: any, prevProps: any) {
  // If props have changed:
  if (
    props.center !== prevProps.center ||
    props.radii !== prevProps.radii ||
    props.tilt !== prevProps.tilt ||
    props.options !== prevProps.options
  ) {
    // Change the Style, LatLng, Radii, and Tilt of our ellipse instance:
    instance.setStyle(props.options);
    instance.setLatLng(props.center);
    instance.setRadius(props.radii);
    instance.setTilt(props.tilt);
  }
}

// Create our component with the React-Leaflet Higher-Level Component Factory,
// the createPathComponent hook. This hook combines the createElementHook, createPathHook,
// and createContainerComponent hooks from the React-Leaflet Core Api:
const Ellipse = createPathComponent(createEllipse, updateEllipse);

export default Ellipse;

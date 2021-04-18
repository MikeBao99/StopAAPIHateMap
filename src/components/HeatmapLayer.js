const HeatLayer = (props: Props) => {
  const map = useMap();

  useEffect(() => {
    const { data, ...options } = props;

    const heatLayer = Leaflet.heatLayer(data, options);
    map.addLayer(heatLayer);
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, props]);
};
export default HeatLayer;
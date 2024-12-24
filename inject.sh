window=/opt/vivaldi/resources/vivaldi/window.html
if [ ! -f window.html ]; then
  cp "$window" window.html
fi

cp inject.js /opt/vivaldi/resources/vivaldi/
cat window.html <(echo "<script src='/inject.js'></script>") > "$window"


+++
title = "{{ replace .Name "-" " " | title }}"
weight = 1
draft = false

role = ""
bio = ""
avatar = ""

[organization]
  name = ""
  url = ""

# Check the available icons on https://fontawesome.com/.
# You can get similar results like this <i class="fab fa-github"></i> after searching.
# Then icon is github and iconPack is fab for this case.
[[social]]
  icon = ""
  iconPack = ""
  url = ""

[widget]
  handler = "about"
    
  # Options: sm, md, lg and xl. Default is md.
  width = ""

  [widget.sidebar]
    # Options: left and right. Leave blank to hide.
    position = ""
    # Options: sm, md, lg and xl. Default is md.
    scale = ""
    
  [widget.background]
    # Options: primary, secondary, tertiary or any valid color value. Default is primary.
    color = ""
    
    # See TODO
    image = ""
    # Options: auto, cover and contain. Default is auto.
    size = ""
    # Options: center, top, right, bottom, left.
    position = ""
    # Options: fixed, local, scroll.
    attachment = ""
+++
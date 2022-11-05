source "https://rubygems.org"

# Jekyll
group :jekyll_plugins do
    gem 'github-pages'                     # Default Github Pages plugin
    gem 'jekyll-multiple-languages-plugin' # Used to give us translatability -- this is not supported by GH Pages out of the box, but we are able to build it through GH Actions before pushing to pages
end

# Windows and JRuby does not include timezone info files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { Gem.win_platform? } do
    gem "tzinfo", "~> 1.2"
    gem "tzinfo-data"
    gem "wdm", "~> 0.1.1"
    gem "webrick"
end
source "https://rubygems.org"

ruby '2.6.6'

gem 'rake'

gem 'sass'

# gem "jekyll", "~> 4.3.3"

gem 'liquid', '~> 4.0.0'
gem 'liquid-c', '~> 4.0.0'
gem 'jekyll-redirect-from'
gem "mini_magick"
gem 'uglifier'
gem 'jekyll-autoprefixer'

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'sprockets'
  gem 'jekyll-assets', :git => 'https://github.com/kou/jekyll-assets.git', :branch => 'add-support-for-sprockets-4.0'
  gem 'jekyll-sanity', :git => 'https://github.com/envygeeks/jekyll-sanity.git'
  gem 'sass'
  gem "activesupport"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]


group :development do 
  gem 'thin'
  gem 'rack'
  gem 'guard-jekyll-plus', git: 'https://github.com/imathis/guard-jekyll-plus.git'
  gem 'guard-livereload'
  gem 'rb-readline'
end

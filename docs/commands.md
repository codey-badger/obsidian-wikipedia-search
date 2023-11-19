The plugin comes with the following two commands. You can access these commands over the command palette (`CTRL+P`). The `Open Article` command also has its own little button in the ribbon menu on the left (the Wikipedia Logo). Of course you can also set custom hotkeys for the commands in your settings.

## `Link Article`
The `Link Article` command can be used in the edit mode of any markdown file in your vault. At first you have to search for and select the Wikipedia article you want to link using the [search pop-up](#shared-search-modal) that appears. After you selected the article you were looking for you have to choose which template to use for the insert. For this another pop-up appears for you to select one of the ones you configured in the settings. If you don't have any [additional templates](settings.md#template-settings) this step is skipped and the default template is used. When you picked the template the magic is happening. The insert is created using the templates [template string](settings.md#template-string) and is inserted inline at the cursors position or into a newly created note based on your [settings](settings.md#creates-note--custom-note-path). Now the ["Cursor placement" setting](settings.md#cursor-placement) comes into play and everything is done!

## `Open Article`
The `Open Article` can be used everywhere. It lets you open articles to read. At first you have to search for and select the Wikipedia article you want to open using the [search pop-up](#shared-search-modal) that appears. Now the articles website gets opened either in your default browser or obsidian directly which depends on a few factors. On mobile articles always get opened in the browser. On desktop it depends on your ["Open article in browser" setting](settings.md#open-article-in-browser) and whether or not you have the [Surfing plugin](https://github.com/PKM-er/Obsidian-Surfing) enabled. The Surfing plugin allows you to browse the web and open websites within Obsidian. You can install it [here](obsidian://show-plugin?id=surfing). The Wikipedia Search plugin integrates with the Surfing plugin. By default will Wikipedia Search create a new Surfing web tab and make it open the url of your article selection if you have the plugin enabled.

## Shared search modal
The search modal gets used by both the `Link Article` and `Open Article` command. It lets you search the Wikipedia for the article you are looking for and lets you select one. If you had some text selected while calling one of the commands your selection is automatically pasted into the search bar. The search modal shows you the search results for articles that fit to your query (see the [search limit setting](settings.md#search-limit) to change to maximum number of results shown). Each article gets shown with it's title and description (if available). By default the Wikipedia set in your [settings](settings.md#language) will be searched for any given input. If your query starts with a language code followed by a semicolon the Wikipedia of the language code will be used temporarily for this query (for example `nl: Albert Einstein` to search for the dutch Wikipedia article of Albert Einstein). This let's you easily **quicksearch different languages**. When you found what you were looking for just select it. This is also where [this](settings.md#auto-select-single-response-queries) setting might come in handy.
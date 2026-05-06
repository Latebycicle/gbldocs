# Resources

> **Last updated: May 2025** — contact the communications team to add or update links.

Key documents and folders shared with the GBL team. Click any link to open in Google Drive.

---

## Brand Assets

- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">GBL Logo Pack (folder)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Presentation Templates (folder)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Photo Library (folder)</a> <!-- TODO: replace with real URL -->

---

## Research & Reports

- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Annual Impact Report 2024 (file)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Worker Wellbeing Survey Data (folder)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Policy Briefs (folder)</a> <!-- TODO: replace with real URL -->

---

## Internal Operations

- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">HR Policies & Handbook (file)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Finance & Expenses Guide (file)</a> <!-- TODO: replace with real URL -->
- <a href="https://drive.google.com/drive/folders/placeholder-id" target="_blank">Onboarding Materials (folder)</a> <!-- TODO: replace with real URL -->

---

## Embedded Google Drive Folder (Experimental)

### Option 1: Direct Shareable Link (Simplest)
```html
<a href="https://drive.google.com/drive/folders/1fm5MTPiW17GKRRnXllEe6uncWxSM30O0?usp=sharing" 
   target="_blank" 
   class="button">
  View Files in Google Drive →
</a>
```
**Pros:** No setup, works everywhere  
**Cons:** Opens in new tab, not embedded

### Option 2: iframe Embed (Limited)
```html
<iframe 
  src="https://drive.google.com/drive/folders/1fm5MTPiW17GKRRnXllEe6uncWxSM30O0?usp=sharing&embedded=true" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen=""
  allow="autoplay">
</iframe>
```
**Pros:** Embedded on page  
**Cons:** May require Google login, limited interactivity, not always reliable

### Option 3: Folder Preview with Google Drive Embed API
```html
<!-- Load Google Drive Picker API -->
<script src="https://apis.google.com/js/api.js"></script>

<div id="drive-folder-container" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
  <div id="file-list" style="max-height: 600px; overflow-y: auto;">
    <!-- Files load here -->
  </div>
</div>

<script>
  gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'YOUR_API_KEY', // Get from Google Cloud Console
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(() => {
      // List files from folder
      const folderId = '1fm5MTPiW17GKRRnXllEe6uncWxSM30O0';
      
      gapi.client.drive.files.list({
        q: `'${folderId}' in parents and trashed=false`,
        pageSize: 50,
        fields: 'files(id, name, mimeType, webViewLink, webContentLink, size)'
      }).then(response => {
        const files = response.result.files;
        const html = files.map(file => `
          <div style="padding: 10px; border-bottom: 1px solid #eee;">
            <strong>${file.name}</strong>
            <a href="${file.webViewLink}" target="_blank" style="margin-left: 10px;">View</a>
            ${file.webContentLink ? `<a href="${file.webContentLink}" target="_blank" style="margin-left: 5px;">Download</a>` : ''}
          </div>
        `).join('');
        
        document.getElementById('file-list').innerHTML = html || 'No files found';
      });
    });
  });
</script>
```
**Pros:** Full control, native view/download buttons, scrollable  
**Cons:** Requires Google API setup, OAuth for public access

### Option 4: Third-Party Service (Quick Setup)
Try services like:
- [embed.io](https://embed.io) - Easy drag-and-drop
- [Google Docs Viewer](https://docs.google.com/viewer?url=) - For document previews
- [Smash](https://www.smash.com) - Beautiful file sharing

### Option 5: Custom Web Component (Most Flexible)
```html
<google-drive-folder 
  folder-id="1fm5MTPiW17GKRRnXllEe6uncWxSM30O0"
  api-key="YOUR_API_KEY"
  height="600px">
</google-drive-folder>
```
Build a reusable component that handles auth, lists files, and provides download links.

---

### Recommendation for GBL
**Start with Option 1** (direct link) for public sharing.  
**Use Option 3** (API) if you need a custom, embedded experience with download capabilities.  
**Consider Option 5** if you'll embed multiple folders across the site.
